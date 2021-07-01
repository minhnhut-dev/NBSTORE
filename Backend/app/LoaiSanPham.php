<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SanPham;
class LoaiSanPham extends Model
{
    //
    public $timestamp= false;
    protected $fillable=['TenLoai','id','parent_id'];

    public function products()
    {
        return $this->hasMany(SanPham::class,'loai_san_phams_id','id');
    }
    public function Name_Parent_id()
    {
        return $this->belongsTo(LoaiSanPham::class,'parent_id','id');
    }

    public function parent()
    {
        return $this->belongsTo('LoaiSanPham', 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(LoaiSanPham::class, 'parent_id');
    }
    // recursive, loads all descendants
        public function childrenRecursive()
        {
        return $this->children()->with('childrenRecursive');
        }

}
