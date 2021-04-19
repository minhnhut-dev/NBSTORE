<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConstraintKeySanPham extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('san_phams', function (Blueprint $table) {
            $table->foreign('loai_san_phams_id')->references('id')->on('loai_san_phams');
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
        Schema::table('san_phams', function (Blueprint $table) {
            //
            $table->dropForeign('san_phams_loai_san_pham_id_foreign');

        });
    }
}
