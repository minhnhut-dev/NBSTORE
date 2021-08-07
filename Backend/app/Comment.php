<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SanPham;
use App\NguoiDung;
class Comment extends Model
{
    //
    protected $tables= 'comments';

    public function children()
    {
        return $this->hasMany(Comment::class,'parent_id');
    }
    public function user(){
        return $this->belongsTo(NguoiDung::class,'nguoi_dungs_id');
    }
}
