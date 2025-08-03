import Tooltip from './Tooltip.jsx';
import './Tooltip.css';

export default function DemoButton() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Tooltip tooltipText="This is a demo button tooltip">
                    <button
                        style={{
                            padding: '10px 20px',
                            backgroundColor: 'blue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                        }}
                    >
                        Hover me to see tooltip
                    </button>
                </Tooltip>
            </div>
        </>
    )
}