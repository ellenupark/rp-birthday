import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import bdayImage from './static/A3.jpg'
import './Presenter.css';


const Presenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage style={{backgroundColor: "pink"}}page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span className='speech' style={{ fontSize: "3em" }}>Happy Birthday Rachel!!! 😀</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={FadeUp}>
          <span className='speech' style={{ fontSize: "3em" }}>Enjoy your gift!!! 🎉</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={ZoomInScrollOut}>
          <span className='count' style={{ fontSize: "3em" }}>3... ✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <span className='count' style={{ fontSize: "3em" }}>2... ✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={ZoomInScrollOut}>
          <span className='count' style={{ fontSize: "3em" }}>1... ✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <div>
          <span style={{ fontSize: "3em" }}>
            <Animator animation={MoveIn(-1000, 0)}>✨</Animator>
            <Animator animation={MoveIn(1000, 0)}>✨</Animator>
            <Animator animation={MoveIn(-1200, 0)}>✨</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={6}>
        <Animator animation={batch(Fade(), Sticky())}>
          <img src={bdayImage} width={800} alt='Anime Rachel' />
        </Animator>
      </ScrollPage>
      <ScrollPage page={7}>
        <Animator animation={FadeUp} >
          <span className='speech' style={{ fontSize: "3em" }}>
            Download 
            <a
              href={bdayImage}
              color="transparent"
              target="_blank"
              rel="noreferrer"
              download> here
            </a>. ⛅️
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Presenter;