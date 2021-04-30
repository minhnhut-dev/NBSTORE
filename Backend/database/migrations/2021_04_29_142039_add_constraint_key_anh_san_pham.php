<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConstraintKeyAnhSanPham extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('anh_san_phams', function (Blueprint $table) {
            $table->foreign('san_phams_id')->references('id')->on('san_phams');
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
        Schema::table('anh_san_phams', function (Blueprint $table) {
            //
            $table->dropForeign('anh_san_phams_san_phams_id_foreign');
        });

    }
}
