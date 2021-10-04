<div style="font-family:'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif;direction:ltr">
    <table class="m_-6158600730156614244main" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F2F2F2" >
        <tbody>
            <tr>
                <td  style="max-width:550px;border-radius:24px" bgcolor="#ffffff" align="center" style="padding:0 8px">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                            <tr>
                                <td align="center" style="padding:25px 0px">
                                    <a href="http://localhost:3000/" target="_blank" >
                                        <img class="m_-6158600730156614244jecl-Icon-img CToWUd" src="http://localhost:3000/static/media/logo-nbstore.ef1509cc.png" alt="nbstore-logo" width="100" style="display:block" border="0">
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                            <tr>
                                <td align="center" class="m_-6158600730156614244indeed-logo" style="padding:25px 0px">

                                      Bạn đã đặt hàng thành công: Mã đơn hàng {{$order[0]->id}}, tổng tiền {{$order[0]->Tongtien}} vnd, {{$order[0]->TenTrangThai}}.

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="m_-6158600730156614244width-550 m_-6158600730156614244br-24" style="max-width:550px;border-radius:24px" width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <table  style="" width="100%" bgcolor="#ffffff" >
                                        <thead>
                                            <tr>
                                                <td>STT</td>
                                                <td>Tên sản phảm</td>
                                                <td>Số lượng</td>
                                                <td>Đơn giá</td>
                                                <td>Thành tiền</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @php
                                            $len =sizeof($order_details);
                                            @endphp
                                            @for ($i=0; $i < $len; $i++ )
                                            <tr>
                                                <td >
                                                {{$i+1}}
                                                </td>
                                                <td>
                                                {{$order_details[$i]->TenSanPham}}
                                                </td>
                                                <td>
                                                {{$order_details[$i]->SoLuong}}
                                                </td>
                                                <td>
                                                {{$order_details[$i]->DonGia}}
                                                </td>
                                                <td>
                                                {{$order_details[$i]->DonGia*$order_details[$i]->SoLuong}}
                                                </td>
                                             </tr>
                                             @endfor

                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table bgcolor="#f4f4f4" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;font-size:12px">

                        <tbody>
                            <tr>
                                <td bgcolor="#f4f4f4" align="left" style="padding:10px 10px 10px 30px;;color:#555;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:400;line-height:18px">
                                    <p style="margin:0">
                                        <a href="#" style="color:#111;font-weight:bold;font-size:12px" target="_blank" >
                                        NBSTORE UY TÍN SỐ 1
                                    </a> |
                                    <a href="#" style="color:#111;font-weight:bold;font-size:12px" target="_blank" >
                                        EMAIL: CSKH@NBSTORE.COM
                                    </a>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#f4f4f4" align="left" style="padding:10px 10px 10px 30px;;color:#555;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:400;line-height:18px">
                                    <p style="margin:0">
                                        <a href="#" style="color:#111;font-weight:bold;font-size:12px" target="_blank" >
                                        Tổng đài miễn phí 1800 6975 (Làm việc từ 8h00 - 22h00)
                                    </a> •
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <td bgcolor="#f4f4f4" align="left" style="padding:10px 10px 10px 30px;;color:#555;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:400;line-height:18px">
                                    <h4 style="margin:0">SHOWROOM HCM(Làm việc từ 8h00 - 22h00)

                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td bgcolor="#f4f4f4" align="left" style="padding:0px 30px 15px 30px;color:#555;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:400;line-height:18px">
                                    <p style="margin:0">
                                        - Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.
                                    </p>

                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#f4f4f4" align="left" style="padding:0px 30px 15px 30px;color:#555;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:400;line-height:18px">
                                    <p style="margin:0">
                                        - Địa chỉ 2: 189 Cống Quỳnh, Phường Nguyễn Cư Trinh, Quận 1.
                                    </p>

                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#f4f4f4" align="left" style="padding:10px 10px 10px 30px;;color:#555;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:400;line-height:18px">
                                    <h4 style="margin:0">SHOWROOM HN(Làm việc từ 8h00 - 21h00)

                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td bgcolor="#f4f4f4" align="left" style="padding:0px 30px 15px 30px;color:#555;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:400;line-height:18px">
                                    <p style="margin:0">
                                        - Địa chỉ : 37 Ngõ 121 Thái Hà, Phường Trung Liệt, Quận Đống Đa.
                                    </p>

                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#f4f4f4" align="left" style="padding:0px 30px 30px 30px;color:#555;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:400;line-height:18px">
                                    <image
                                    src="https://khaihuy.com.vn/images/content/banner_s383.jpg"
                                    style=" display: block;
                                        width: 100%;
                                        object-fit: cover;">
                                    </image>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </td>
            </tr>
        </tbody>
    </table>

</div>
