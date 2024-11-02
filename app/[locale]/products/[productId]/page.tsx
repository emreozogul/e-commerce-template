"use client";

import { useState, useEffect } from 'react';
import { Product } from '@/models/Product';
import { ProductImages, ProductInfo, ProductTabs, RelatedProducts } from './components';
import products from '@/data/products';
import { useTranslations } from 'next-intl';

interface ProductDetailProps {
    params: {
        productId: string;
        locale: string;
    };
    product: Product;
}

export default function ProductDetail({ params }: ProductDetailProps) {
    const t = useTranslations('productDetail');
    const [product, setProduct] = useState<Product | null>(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const product = products.find(p => p.id === parseInt(params.productId));
        setProduct(product || null);
    }, [params.productId]);

    if (!product) {
        return <div className="container mx-auto px-4 py-8">{t('productNotFound')}</div>;
    }

    const productImages = [product.image, product.image, product.image];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                <ProductImages
                    images={productImages}
                    currentImage={currentImage}
                    onImageChange={setCurrentImage}
                />
                <ProductInfo
                    product={product}
                    translations={{
                        addToCart: t('addToCart'),
                        addToWishlist: t('addToWishlist'),
                        by: t('by'),
                        reviews: t('reviews'),
                        selectColor: t('selectColor'),
                        selectSize: t('selectSize')
                    }}
                />
            </div>

            <ProductTabs
                product={product}
                translations={{
                    descriptionTitle: t('tabs.description'),
                    specificationsTitle: t('tabs.specifications'),
                    reviewsTitle: t('tabs.reviews')
                }}
            />
            <RelatedProducts
                currentProductId={product.id}
                products={products}
                translations={{
                    title: t('relatedProducts.title')
                }}
            />
        </div>
    );
}