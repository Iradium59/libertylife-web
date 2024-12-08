export default function Wave({ color, top = false }: { color: string, top?: boolean }) {
    return (
        <div className="w-full h-16">
            {top ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={color} fillOpacity="1" d="M0,128L60,117.3C120,107,240,85,360,80C480,75,600,85,720,112C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={color} fillOpacity="1" d="M0,128L60,117.3C120,107,240,85,360,80C480,75,600,85,720,112C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            )}
        </div>
    )
}
