import {useEffect, useRef, useState} from "react";
import PostComponent from "./PostComponent";
import axios from "axios";

const ListSection = ({ pathToLoadData }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(-1);
    const [hasMore, setHasMore] = useState(true);

    const loaderRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        // initializing IntersectionObserver
        // Attaching to Loading div
        const observer = new IntersectionObserver(handleObserver, options);
        if (loaderRef.current) {
            observer.observe(loaderRef.current)
        }

    }, []);

    useEffect(() => {
        if (page >= 0 && hasMore) {
            const limit = 10;
            const start = page * limit;
            const url = `${pathToLoadData}?_start=${start}&_limit=${limit}`;
            axios.get(url).then((response) => {
                const result = response.data;
                setData((data) => [...data, ...result]);
                if (response.headers["x-total-count"] <= data.length) {
                    setHasMore(false);
                }
            })
        }
    }, [page, pathToLoadData]);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting && hasMore) {
            setPage((page) => ++page)
        }
    }

    return (
        <div className={"list-section"} >
            <PostComponent data={data}/>
                <div className="loading" ref={loaderRef}>
                    {hasMore && <h1>Loading...</h1>}
                </div>
        </div>

    )
}

export default  ListSection;
