<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SanPham;
class Comment extends Model
{
    //
    protected $tables= 'comments';

    public function children()
    {
        return $this->hasMany(Comment::class,'parent_id');
    }

}
