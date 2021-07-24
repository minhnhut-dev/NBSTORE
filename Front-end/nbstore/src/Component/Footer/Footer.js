import React from "react";
import "./Footer.css";
function Footer(props) {
  return (
    <>
      <div id="footer">
        <div className="container" style={{ display: "flex" }}>
          <div id="user1" className="col-sm-4 col-xs-12">
            <div className="moduletable">
              <h3>NBSTORE Uy tín số 1</h3>
              <div className="custom">
                <h3 className="title-footer-2">
                  Email: cskh@gearvn.com
                  <br />
                </h3>
                <p style={{ fontSize: "14px" }}>
                  <b>Tổng đài miễn phí</b>
                  (Làm việc từ 8h00 - 22h00)
                </p>
                <table style={{ width: "296px" }}>
                  <tbody>
                    <tr>
                      <td style={{ width: "211px" }}>Gọi mua hàng</td>
                      <td style={{ width: "105px" }}>
                        <strong>1800 6975</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "211px" }}>Hỗ trợ khách hàng </td>
                      <td style={{ width: "105px" }}>
                        <strong>1800 6173</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="user2" className="col-sm-5 col-xs-12">
            <b>Hệ Thống Cửa Hàng</b>
            <p>
              <b>SHOWROOM HCM</b>
              (Làm việc từ 8h00 - 22h00)
            </p>
            - Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.
            <br />
            - Địa chỉ 2: 189 Cống Quỳnh, Phường Nguyễn Cư Trinh, Quận 1.
            <br />
            <b>SHOWROOM HN</b>
            (Làm việc từ 8h00 - 21h00)
            <br />- Địa chỉ : 37 Ngõ 121 Thái Hà, Phường Trung Liệt, Quận Đống
            Đa.
          </div>
        </div>
      </div>
      {/**end footer */}
    </>
  );
}

export default React.memo(Footer) ;