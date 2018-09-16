import * as React from 'react';

import * as styles from './GreebleBox.css';

export interface GreebleBoxProps {
    children: React.ReactNode,
    cutSize: number,
    strokeWidth: number,
    corners: {
        tl?: boolean,
        tr?: boolean,
        br?: boolean,
        bl?: boolean,
    }
}

interface GreebleBoxState {
    rect?: DOMRectReadOnly
}

export default class GreebleBox extends React.Component<GreebleBoxProps, GreebleBoxState> {
    static defaultProps = {
        cutSize: 20,
        strokeWidth: 2,
        corners: {
            tl: true,
            tr: true,
            bl: true,
            br: true
        }
    }

    contentRef: React.RefObject<HTMLDivElement>;
    observer: ResizeObserver

    constructor(props: GreebleBoxProps) {
        super(props);

        this.state = {};
        this.contentRef = React.createRef();
        this.observer = new window.ResizeObserver(this.onResize);
    }

    componentDidMount() {
        if (this.contentRef.current) {
            this.observer.observe(this.contentRef.current);
        }
    }

    onResize = (entries: ResizeObserverEntry[]) => {
        const entry = entries[0];
        this.setState({ rect: entry.contentRect })
    }

    render() {
        const { rect } = this.state;
        const { children, cutSize, strokeWidth, corners } = this.props;

        const cornerOffset = Math.trunc(cutSize / Math.SQRT2);
        const strokeDiameter = strokeWidth / 2;

        const padding = (cornerOffset / 2) + strokeDiameter;
        let pathPoints;
        let viewBox;
        if (rect) {
            const { width, height } = rect;

            const topEdge = strokeDiameter;
            const leftEdge = strokeDiameter;
            const rightEdge = width - strokeDiameter;
            const bottomEdge = height - strokeDiameter;

            viewBox = `0 0 ${width} ${height}`

            pathPoints = [
                //Top left
                corners.tl ?
                    `${leftEdge},${topEdge + cornerOffset} ${leftEdge + cornerOffset},${topEdge}` :
                    `${leftEdge},${topEdge}`,

                // Top right
                corners.tr ?
                    `${rightEdge - cornerOffset},${topEdge} ${rightEdge},${topEdge + cornerOffset}` :
                    `${rightEdge},${topEdge}`,

                //Bottom right
                corners.br ?
                    `${rightEdge},${bottomEdge - cornerOffset} ${rightEdge - cornerOffset},${bottomEdge}` :
                    `${rightEdge},${bottomEdge}`,

                //Bottom left
                corners.bl ?
                    `${leftEdge + cornerOffset},${bottomEdge} ${leftEdge},${bottomEdge - cornerOffset}` :
                    `${leftEdge},${bottomEdge}`
            ].join(' ');
        }


        return (
            <div className={styles.wrapper} ref={this.contentRef}>
                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
                    <polygon className={styles.background} points={pathPoints} strokeWidth={strokeWidth} />
                </svg>
                <div
                    className={styles.content}
                    style={{ padding: `${padding}px` }}
                >
                    {children}
                </div>
            </div>
        )
    }
}