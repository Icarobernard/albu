import React from 'react'
import Image from 'next/image'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
type Card = { phrase: string, name: string, artist: string, image: string, sound: string }

export default function Card({ phrase, name, artist, image, sound }: Card) {
    return (
        <div>
            <figure className="md:flex bg-slate-800 rounded-xl md:p-2 dark:bg-slate-800">
                {/* <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}

                <Image
                    // loader={myLoader}

                    src={image}
                    alt="Picture of the author"
                    width={500}
                    height={200}
                />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4 w-full">
                    <blockquote>
                        <p className="text-lg font-medium text-white">
                            {phrase}
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-purple-400 dark:text-purple-400">
                            {name}
                        </div>
                        <div className="text-slate-500 dark:text-slate-500">
                            {artist}
                        </div>
                    </figcaption>
                    <AudioPlayer className="md:flex bg-slate-800 rounded-xl p-8 md:p-0 dark:bg-slate-800"
                        src={sound}
                        onPlay={e => console.log(e)}
                        style={{ backgroundColor: '#334155' }}
                    />
                </div>
            </figure>
        </div>
    )
}
