import {test} from 'node:test';
import assert from 'node:assert/strict';
import {selectPhotos, shuffledPhotoIds} from '../src/utils/photography.mjs';

const photo = (id, dateTaken, fileSize, city, camera) => ({id, dateTaken, fileSize, infoSections: [{rows: [{label: 'City', value: city}, {label: 'Camera', value: camera}]}]});
const photos = [photo('3', '2026-01-02T00:00:00Z', 30, 'Montreal', 'Canon'), photo('1', '2026-01-01T00:00:00Z', 10, 'Cape Town', 'Canon'), photo('2', null, null, 'Montreal', 'Apple')];

test('filters combine and do not mutate the source', () => {
    assert.deepEqual(selectPhotos(photos, {City: 'Montreal', Camera: 'Canon'}, 'date-desc').map(p => p.id), ['3']);
    assert.deepEqual(selectPhotos(photos, {City: 'Cape Town', Camera: 'Apple'}, 'date-desc'), []);
    assert.deepEqual(photos.map(p => p.id), ['3', '1', '2']);
});

test('date and size sorting keep missing values last in both directions', () => {
    for (const field of ['date', 'size']) {
        assert.deepEqual(selectPhotos(photos, {}, `${field}-asc`).map(p => p.id), ['1', '3', '2']);
        assert.deepEqual(selectPhotos(photos, {}, `${field}-desc`).map(p => p.id), ['3', '1', '2']);
    }
});

test('title sorting uses display titles when custom titles are absent', () => {
    const titled = [{id: 'a', displayTitle: 'Photo 10'}, {id: 'b', title: 'Photo 2'}];
    assert.deepEqual(selectPhotos(titled, {}, 'title-asc').map(p => p.id), ['b', 'a']);
    assert.deepEqual(selectPhotos(titled, {}, 'title-desc').map(p => p.id), ['a', 'b']);
});

test('filtering preserves a shuffle order and clearing restores it', () => {
    const order = ['2', '1', '3'];
    assert.deepEqual(selectPhotos(photos, {Camera: 'Canon'}, 'shuffle', order).map(p => p.id), ['1', '3']);
    assert.deepEqual(selectPhotos(photos, {}, 'shuffle', order).map(p => p.id), order);
});

test('shuffle includes every photo exactly once, including empty and single collections', () => {
    assert.deepEqual([...shuffledPhotoIds(photos)].sort(), ['1', '2', '3']);
    assert.deepEqual(shuffledPhotoIds([]), []);
    assert.deepEqual(shuffledPhotoIds([photos[0]]), ['3']);
});

test('multiple values use OR within a category and AND across categories', () => {
    assert.deepEqual(selectPhotos(photos, {City: ['Montreal', 'Cape Town'], Camera: ['Canon']}, 'date-asc').map(p => p.id), ['1', '3']);
    assert.equal(selectPhotos(photos, {Camera: []}, 'date-desc').length, 3);
});

test('search is case insensitive and combines with category filters', () => {
    assert.deepEqual(selectPhotos(photos, {Camera: ['Canon']}, 'date-desc', [], ' MONTREAL ').map(p => p.id), ['3']);
    assert.equal(selectPhotos(photos, {}, 'date-desc', [], 'no match').length, 0);
});
