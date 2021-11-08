import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
function Paginate(props) {
    const {handleChangePage,total}=props;
    return (
        <>
            <Pagination count={total} 
                color="secondary"
                variant="outlined"
                hideNextButton={true}
                hidePrevButton={true}
                defaultPage={1}
                onChange={(event,value)=>handleChangePage(value)}
            />
        </>
    );
}

export default Paginate;