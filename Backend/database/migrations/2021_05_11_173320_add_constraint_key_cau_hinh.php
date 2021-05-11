<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConstraintKeyCauHinh extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('cau_hinhs', function (Blueprint $table) {
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
        Schema::table('cau_hinhs', function (Blueprint $table) {
            //
            $table->dropForeign('cau_hinhs_san_phams_id_foreign');
        });
    }
}
