function Home() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <iframe
                id="meuIframe"
                width="853"
                height="480"
                src="https://www.youtube.com/embed/u9EgZsBWDF0"
                title="Sorria"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                style={{ backgroundColor: 'black' }}
            ></iframe>
        </div>
    );
}

export default Home;
