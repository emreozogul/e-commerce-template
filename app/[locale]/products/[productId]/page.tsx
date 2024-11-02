
export default function ProductPage({ params }: { params: { productId: string } }) {
    return (
        <div className="flex flex-col min-h-screen bg-white" >
            <div className="flex flex-col">
                <h1>Product {params.productId}</h1>
            </div>
        </div>
    )
}
