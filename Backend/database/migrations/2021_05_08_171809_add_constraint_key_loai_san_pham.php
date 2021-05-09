<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConstraintKeyLoaiSanPham extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('loai_san_phams', function (Blueprint $table) {
            $table->foreign('parent_id')->references('id')->on('loai_san_phams');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('loai_san_phams', function (Blueprint $table) {
            //
            $table->dropForeign('loai_san_phams_parent_id_foreign');
        });
    }
}
