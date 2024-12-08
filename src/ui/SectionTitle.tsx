


export default function SectionTitle({ title, subTitle} : {title: string, subTitle: string}) {
    return (
        <div className="text-center mt-12 mb-12 ">
            <h2 className="text-4xl inline-block font-thin">{title}</h2>
            <hr className="border-t border-blue-400 w-24 mx-auto my-2 mt-6"/>
            <h4 className="text-gray-600">{subTitle}</h4>
        </div>
    )
}