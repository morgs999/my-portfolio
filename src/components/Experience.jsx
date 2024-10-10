import { expTable } from "../constants/exptable";

export default function Experience() {
    return (
        <>
            <div className="container">
                <div className="row">
                    {Object.entries(expTable).map(([key, value]) => {
                        return (
                            <div className="col-lg-4 col-sm-6 pb-4">
                                <div id={key} className='exp-card border border-2 rounded p-4 '>
                                    <h5 className=''>
                                        {value.title}
                                    </h5>
                                    <div className='exp-table align-content-center py-1'>
                                        {value.rows.map((item, index) => {
                                            return (
                                                <div key={index} className="table-row gap-2">
                                                    <div className="table-cell m-2" style={{ color: `${item.color}` }}>
                                                        {item.icon}
                                                    </div>
                                                    <p className="table-cell m-2">{item.name}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
} 