import React from "react";
import { notFound } from "next/navigation"; // 👈 Added missing import
import ProductList from "@/components/ProductList";
import { getStore } from "@/lib/api";
import { PageParams, Store  } from "@/types";

export const revalidate = false;
export const dynamic = "force-static";


export default async function Page({
    params,
}: {
    params: Promise<PageParams>;
}) {
    const { site } = await params;

    // Fetch store and cast type safely
    const data = await getStore(site);
    const store = data?.store as Store | undefined;

    // Handle 404 if store doesn't exist
    if (!store) return notFound();

    return (
        <div className="min-h-screen">
            <ProductList
                store={store}

                mainColor={store.mainColor }
                subdomain={site}
                id={store._id}
                // Note: 'Categories' prop will default to [] inside ProductList if not passed here
                Categories={[]}
            />
        </div>
    );
}