import { CSSProperties, useState } from "react";

const styles: { row: CSSProperties; box: CSSProperties } = {
    row: {
        display: "flex",
        flexDirection: "row", // TypeScript understands this as a valid flex direction
        gap: "10px",
    },
    box: {
        padding: "10px",
        backgroundColor: "red",
        border: "1px solid #ccc",
    },
};
const Rows = ({ vals }: { vals: Array<number> }) => {
    return (
        <div style={styles.row}>
            {vals.map((v) => (
                <div style={styles.box}>Div {v}</div>
            ))}
        </div>
    );
};

interface BoardData {
    rows: number;
    cols: number;
}

const Board = ({ rows, cols }: BoardData) => {
    const _rows: Array<number> = [];
    for (let i = 0; i < rows; i++) {
        _rows.push(i);
    }
    const _cols: Array<number> = [];
    for (let i = 0; i < cols; i++) {
        _cols.push(i);
    }

    return (
        <>
            {_cols.map(() => (
                <Rows vals={_rows} />
            ))}
        </>
    );
};

const Chessboard = () => {
    const [data, setData] = useState({
        rows: 8,
        cols: 8,
    });

    return (
        <>
            <h1>Chessboard</h1>
            <input
                placeholder="row"
                type="number"
                onChange={(e) =>
                    setData((prv) => ({
                        ...prv,
                        rows: parseInt(e.target.value) || 0,
                    }))
                }
            />
            <input
                placeholder="Cols"
                type="number"
                onChange={(e) =>
                    setData((prv) => ({
                        ...prv,
                        cols: parseInt(e.target.value) || 0,
                    }))
                }
            />

            <Board rows={data.rows} cols={data.cols} />
        </>
    );
};

export default Chessboard;
