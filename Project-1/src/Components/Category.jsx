/* eslint-disable react/prop-types */

import "../assets/css/components/category.css";
function Category(props) {
  return (
    <>
      <div className="category-wrapper">
        <div className="category">
          <h1>{props.title}</h1>
        </div>
      </div>
    </>
  );
}

export default Category;
