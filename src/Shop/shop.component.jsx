import Main_Course from "../Data/MainCourse.json";
const shop = () => {
    return (
        <div>
            {Main_Course.map(({id,name}) => (
                <div key={id}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    )
};
