function ProfileCard(props) {
    const{title, handle,image} =props
    // const title =props.title;
    // const handle =props.handle;
    return (
    <div>
        <img src ={image} />
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>

    </div>
    );
}

export default ProfileCard;