import styles from "./Portfolio.module.css";

import ProjectCard from "../ProjectCard";

function Portfolio() {
  return (
    <>
      <div className={styles.portfolio}>
        <ProjectCard
          title="ReactDev Tic-Tac-Toe"
          image="https://s3-alpha-sig.figma.com/img/a542/3a06/0a6ce7eebccbbac9881535f078a6567b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZrAhxYw6DGELUm7t6R~HDq1c6lZly69GqaiXwrAgCjIol~gKDByVnUmK9PXsIlHz37AuTmMr0QCNEYpu~FfSJe8PkduohmBVz7XDtn-ENG16VPMZSFTpIZNvtrP2MZjPdV3WcE~9j1s7W7Jr1fAqQ5b3s~Ovz65O0JV7V1D9chLwOPLbkdJX-sdL2cz2Sp8C9wZx59XVWV19aiCK2pyd14nDAHbEwn8Ir38B48-G0jorknf01eTHc2SEQFP4dxmd5Oq44nhgP-yNj1Uz-7UBNNc6vvu8ztM0PXIzk6rsfWlYMRDcS0ju7KXf35obJRq12oYMUDrWyvlXSU6PTN8xGw__"
        />
        <ProjectCard
          title="Poke Collection"
          image="https://s3-alpha-sig.figma.com/img/5f2f/cc9b/ff4319959cc2d700d6754a2d2203780b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q0m6wZ9vz2v6NpX2N4I-3nROe8ajmIBtcTkdU7nDSTqRHlAqLf1zmLtzsR7iOkmmj29M6XnE6BgZHHBY6YSiNdhxUYXPQIihpy92tWtlli6MaSgCmhEDLD7BPA821WncPNzlusLnJkMd8oih~JOdv5PD-Tj1BPgPfXALM2ieEEBbQWmAe9p9fdeW0vlaERoo2TEZaASVHZiWBQ41cc1-QF2ZOMv~qN7wiW2wpd4IhaQZUBUllbkQCtvhLX7LbB2O~d~WM4RMzuUOwTMGT8Njqy97qQbda6-l0BfprYIkjzIQweUOQ6g7kg5xAWgo8A~AuJFC7FSAmGqb8lYpbFlSnQ__"
        />
        <ProjectCard
          title="React Wordle"
          image="https://s3-alpha-sig.figma.com/img/323e/6f9c/9090622f65663d39068cde5747babf1f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AUFDvrGg2jyRw0geSLimjep~R1YDWYtrVIOjSTucNGechJIteZRgdQfd~v9F9fV5RHpyUea8uMd7pxhRXFvzAIB5BgryXIRxlyDjVzU9RSxKXTQeYxirSvpWLZLbmOGw0NyIVna-pVQsaUSvH4GrU-5a4UfMQzorgdGfLEgvj1NfVBZ~ZhXDJuhcfn3C5kYGI1aFrgTIOSDBN~m~dECaZXIif4XO6SADUXS9CmZipbohckT8V2EfmSKNnzSoRaJGDcj5xAnHVqV3ibTCsmpI8uV0KG3KMb7VOqLGf7qSCVlFXTmF5u63griGsn3bGaGF6tkFU4T~n8XK3jAWB2dHQg__"
        />
        <ProjectCard
          title="Video Feed"
          image="https://s3-alpha-sig.figma.com/img/fba1/8de3/bd5992ad601bfd3d31b7643cd7a78c8d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pQ5eXYSkmjb2Bn3WERlAN1UxSyQ6fV5mVAKkoyBKQIDA82u248pHYew10Zy7xIWymRJM-wIGqj9XxaY2dph~Sgpc~9w1Usp~H4PymiRtIN1JDocSbGUMi52N3yoGWUH5cpU6fyP88-HTcU-52g~GaaeZc9GIX6Z03~1OeoHTQCJq-KVJ2vXs59thVieoO4Th4EalwbwOrKPunV66qOmvNYKHFzaKYVX2ESZ-hVwbNFo-cbniSwYTb3NzU5yOJoYSPZLAxb0nuFghncFF-eYQGL1g4X4XAix4xwMNjBSgpadBqoPaYDg9rEarOehQiHxUr0NElHru44goE-uXLTC0Dw__"
        />
      </div>
    </>
  );
}

export default Portfolio;
