import React from 'react';
const Footer = () => {
  return(
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="first-item">
                <div className="logo">
                </div>
                <ul>
                  <li>
                    <a href="#">
                      180 Trần Hưng Đạo
                    </a>
                  </li>
                  <li>
                    <a href="#">KO@company.com</a>
                  </li>
                  <li>
                    <a href="#">097-538-0649</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*<div className="col-lg-3">*/}
            {/*  <h4>Shopping &amp; Categories</h4>*/}
            {/*  <ul>*/}
            {/*    <li>*/}
            {/*      <a href="#">Men’s Shopping</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a href="#">Women’s Shopping</a>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*      <a href="#">Kid's Shopping</a>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
            <div className="col-lg-3">
              <ul>
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Giúp đỡ</a>
                </li>
                <li>
                  <a href="#">Tương tác</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
                <ul>
                <li>
                  <a href="#">Chính sách giao vận chuyển</a>
                </li>
                <li>
                  <a href="#">Hướng dẫn thanh toán</a>
                </li>
                <li>
                  <a href="#">Tra cứu hóa đơn</a>
                </li>
                <li>
                  <a href="#">Quy định chọn size</a>
                </li>
                <li>
                  <a href="#">Quy định đổi hàng</a>
                </li>
                <li>
                  <a href="#">Khách hàng thân thiết</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-12">
              <div className="under-footer">
                <p>
                  <br />
                  Design:{" "}
                  <a
                      href="https://templatemo.com"
                      target="_parent"
                      title="free css templates"
                  >
                    TinDT
                  </a>
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

  );
}
export default Footer;