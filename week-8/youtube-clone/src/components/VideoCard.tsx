function VideoCard(props: any){
    return <div>

        <img className="rounded-xl" src={props.image} />
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <img className="rounded-full w-20 h-20" src={props.thumbImage}/>
            </div>
            <div className="col-span-10 pl-5">
                
                <div>{props.title}</div>
                <div className="col-span-11 text-gray-600 text-base">
                    {props.author}
                </div>

                <div className="col-span-11 text-gray-600 text-base">
                    {props.views} | {props.timestamp}
                </div>
            </div>

        </div>
    </div>
}

export default VideoCard;