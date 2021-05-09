<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SanPham;
class LoaiSanPham extends Model
{
    //
    public $timestamp= false;
    protected $fillable=['TenLoai','id','parent_id'];

    public function SanPham()
    {
        return $this->hasMany(SanPham::class);
    }
    public function Name_Parent_id()
    {
        return $this->belongsTo(LoaiSanPham::class,'parent_id','id');
    }
}
