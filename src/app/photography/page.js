import PhotographyGallery from "@/components/photography-gallery";
import photos from "@/data/photography.json";

export const metadata = {
    title: "Photography · Ben Ollomo",
    description: "A collection of moments through my lens.",
};

export default function PhotographyPage() {
    return (
        <main className="photography-page px-4 py-12 sm:py-16">
            <div className="mb-10 flex items-end justify-between gap-6">
                <div>
                    <h1 className="text-2xl tracking-tight">photography</h1>
                    <p className="mt-3 text-gray-400">some photos that i like</p>
                </div>
            </div>
            <PhotographyGallery photos={photos}/>
        </main>
    );
}
