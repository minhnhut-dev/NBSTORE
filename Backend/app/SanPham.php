<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\LoaiSanPham;
use App\CauHinh;
use App\Comment;
class SanPham extends Model
{
    //
    public $timestamp=false;

    // protected $fillable=['TenSanPham','CauHinh','ThongTin','XuatXu','loai_san_phams_id'];
    protected $table='san_phams';

    public function LoaiSanPham()
    {
        return $this->belongsTo(LoaiSanPham::class,'loai_san_phams_id','id');
    }

    public function CauHinh()
    {
        return $this->hasOne(CauHinh::class,'san_phams_id','id');
    }

    public function Comment()
    {
        return $this->hasMany(Comment::class,'san_phams_id','id');
    }
    public function Children()
    {
        return $this->hasMany(Comment::class,'parent_id');
    }
    public function nestComments(){
        return $this->Comment()->with('nestComments');
    }
}
