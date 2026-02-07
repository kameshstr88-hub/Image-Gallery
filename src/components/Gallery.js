import { useState } from "react"


function Gallery() {
    
    
  const images = [
    { id: 1, src: "/images/img1.jpg", title: "Luxury Car" },
    { id: 2, src: "/images/img2.jpg", title: "Mountain" },
    { id: 3, src: "/images/img3.jpg", title: "AeroPlain" },
     { id: 4, src: "/images/img4.jpg", title: "Beach" }
  ]

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <>
      <div className="gallery">
        {images.map((img) => (
          <div 
            className="card" 
            key={img.id}
            onClick={() => setSelectedImg(img.src)}
          >
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>

      
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Selected view" />
        </div>
      )}
    </>
  )
}

export default Gallery
