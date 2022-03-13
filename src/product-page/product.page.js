import './product.page.scss';
const ProductPage = () => (
<div className="product-page">
    <div className="direct-menu">
        <div className="product-item">
            <div className="content">
                <h1 className="product-name">Main Courses</h1>
                <span className="list-menu">List Main Courses</span>
            </div>
        </div>
        <div className="product-item">
            <div className="content">
                <h1 className="product-name">Drinks</h1>
                <span className="list-menu">List Drinks</span>
            </div>
        </div>
        <div className="product-item">
            <div className="content">
                <h1 className="product-name">Desserts</h1>
                <span className="list-menu">List Desserts</span>
            </div>
        </div>
        <div className="product-item">
            <div className="content">
                <h1 className="product-name">Snacks</h1>
                <span className="list-menu">List Snacks</span>
            </div>
        </div>
        <div className="product-item">
            <div className="content">
                <h1 className="product-name">Appetizer</h1>
                <span className="list-menu">List Appetizer</span>
            </div>
        </div>
    </div>
</div>
    
);

export default ProductPage;