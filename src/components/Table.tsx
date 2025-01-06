import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface TableProps {
    columns: GridColDef[];
    rows: GridRowsProp;
}

const Table: React.FC<TableProps> = ({ columns, rows }) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                paginationModel={{ pageSize: 5, page: 0 }}
                pageSizeOptions={[5, 10, 20]}
            />
        </div>
    );
};

export default Table;
