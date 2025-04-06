export default function Friend({friend}){
    console.log(friend)
    const {name}=friend;
    return(
        <div className="card">
            <h4>Name:{name}</h4>
        </div>
    )
}