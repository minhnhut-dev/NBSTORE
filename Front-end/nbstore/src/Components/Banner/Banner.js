import "./Banner.css";
export default function Banner()
{
    return(
        <div className="container mt-4 box-sliding">
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-3 box-sliding__left">
                            <div className="row pr-4">
                                <ul className="col-md-12 list-unstyled m-0 bg-white border-radius shadow-sm box-list-menu">
                                    <li className="menu-item">
                                        <a href="#">
                                             <i class="icon-cps-3"></i>
                                            <span>Điện thoại</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}