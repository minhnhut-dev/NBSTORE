<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\NguoiDung;
class LoaiNguoiDung extends Model
{
    //
    protected $table  = 'loai_nguoi_dungs';
    public $timestamps= false;
 // 1 loại người dùng có nhiều người dùng
    public function Nguoidung()
    {
        return $this->belongsTo(NguoiDung::class,'nguoi_dungs_id','id');
    }
}
