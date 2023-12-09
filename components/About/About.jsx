import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

const About = ({ title, subtitle, text1, text2, solutionTitle, solutionText, icon, videoUrl }) => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16">
        <div>
          <div>
            <div>
              <p className="text-base font-semibold leading-7 text-garoo-blue">{title}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{subtitle}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {text1}
              </p>
            </div>
          </div>
        </div>
        <div className="p-0 ml-0 overflow-hidden rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 ">
          <video className="w-full h-full rounded-xl  object-cover" loop muted autoPlay playsInline>
              <source src={videoUrl} type="video/mp4"/>
          </video>
        </div>
        <div>
          <div>
            <div className="max-w-xl text-base leading-7 text-gray-700">
              <p>
                {text2}
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  {icon}
                  <span>
                    <strong className="font-semibold text-garoo-blue">{solutionTitle}</strong>
                    {solutionText}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
