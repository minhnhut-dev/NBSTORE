<?php

namespace App\Exports;
use App\DonHang;
use Maatwebsite\Excel\Concerns\FromCollection;
use App\Classes\SalesService;
use App\Classes\Revenue;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithHeadings;
class RevenueYearExport implements FromCollection, WithHeadings
{

    protected $year;
    protected $month;
    function __construct($month, $year)
    {
        $this->year = $year;
        $this->month = $month;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {

        $revenue =SalesService::revenueEachMonthByYear($this->month, $this->year);
        $orders =SalesService::numberOrdersPerMonthByYear($this->month, $this->year);
        $collection = new Collection();
        $i=0;
        foreach ($revenue as $item){
            $item["orders"]=$orders[$i]["amount"];
            $collection->push($item);
            $i++;
        }   
        return $collection;
    }
    public function headings(): array
    {
        return [
            'Tháng',
            'Doanh thu',
            'Số lượng đơn'
        ];
    }
    public function map($bill): array
    {
        return [
        ];
    }
}
