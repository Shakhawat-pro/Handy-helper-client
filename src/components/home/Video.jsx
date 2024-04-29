/* eslint-disable react/no-unescaped-entities */

const Video = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row  mt-10 justify-between">
            <div className="space-y-5 w-6/12">
                <h1 className="text-3xl font-bold text-[#23BE0A]">A Simple Perfect Place To Get Lost</h1>
                <p>Cox's Bazar, nestled in southeastern Bangladesh, boasts the world's longest uninterrupted sandy beach, stretching for miles along its pristine coastline. With its azure waters and golden sands, it offers an idyllic retreat for beach enthusiasts and adventurers alike. Beyond its captivating shoreline, Cox's Bazar also features lush hillsides that provide breathtaking panoramic views and opportunities for trekking and exploration. The town's vibrant atmosphere is enriched by its bustling markets, showcasing local crafts and cuisine, and its welcoming fishing villages, offering a glimpse into the region's rich cultural heritage. Cox's Bazar promises a serene escape surrounded by natural beauty and authentic experiences.</p>
                <ul className="list-disc ml-10">
                    <li>Sandy Serenity: Cox's Bazar offers miles of pristine beaches for relaxation and water sports.</li>
                    <li>Breathtaking Views: Spectacular hillside panoramas provide mesmerizing vistas of the coastline.</li>
                    <li>Cultural Charm: Immerse in vibrant fishing villages and local markets for authentic experiences.</li>
                </ul>
            </div>
            <div style={{ width: '100%', maxWidth: '560px' }} className="rounded-xl overflow-clip">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/ssU0VFliS9g?si=XA_hpU8xli1twcNI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>

    );
};

export default Video;