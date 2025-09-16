function welcome() {
    return <h2>welcome{prop.name}!</h2>;
}

function temp(){
    return(
        <div>
            <welcome name="praveen"/>
            <welcome name="praneeth"/>

        </div>
    )
}temp