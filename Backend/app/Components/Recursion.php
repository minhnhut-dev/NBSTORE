<?php

namespace App\Components;

class Recursion
{

    private $data;
    private $htmlselect='';
    public function __construct($data)
    {
        $this->data = $data;
    }
    function cat_parent($id = 0, $text = '')
    {
        $space =str_repeat('&nbsp;', 5); 
        foreach ($this->data as $val) {
            if ($val['parent_id'] == $id) {
                $this->htmlselect .= "<option value=".$val['id'].">" . $text . $val['TenLoai'] . "</option>";
                $this->cat_parent($val['id'], $text .$space);
            }
        }
        return $this->htmlselect;
    }
}
