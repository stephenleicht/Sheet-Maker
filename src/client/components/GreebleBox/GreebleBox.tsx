import * as React from 'react';

import * as styles from './GreebleBox.css';

export interface GreebleBoxProps {
    children: React.ReactNode,
    size?: number,
}

interface GreebleBoxState {
    rect?: DOMRectReadOnly
}

export default class GreebleBox extends React.Component<GreebleBoxProps, GreebleBoxState> {
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
        const { children, size = 30 } = this.props;
        const strokeWidth = 1;
        
        const lineOffset = Math.trunc(size / Math.SQRT2);

        const padding = lineOffset;
        let pathPoints;
        let viewBox;
        if (rect) {
            const paddedWidth = rect.width + padding * 2;
            const paddedHeight = rect.height + padding * 2;

            viewBox = `-1 -1 ${Math.trunc(paddedWidth) + 3} ${Math.trunc(paddedHeight) + 3}`

            pathPoints = [
                //Top left
                `0,${lineOffset} ${lineOffset},0`,

                // Top right
                `${paddedWidth - lineOffset},0 ${paddedWidth},${lineOffset}`,

                //Bottom right
                `${paddedWidth},${paddedHeight - lineOffset} ${paddedWidth - lineOffset},${paddedHeight}`,

                //Bottom left
                `${lineOffset},${paddedHeight} 0,${paddedHeight - lineOffset}`
            ].join(' ');
        }


        return (
            <div className={styles.wrapper}>
                <svg className={styles.mask} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} shapeRendering="crispEdges">
                    <polygon className={styles.background} points={pathPoints} stroke="#000" strokeWidth={strokeWidth} />
                </svg>
                <div
                    ref={this.contentRef}
                    className={styles.content}
                    style={{ padding: `${padding}px` }}
                >
                    {children}
                </div>
            </div>
        )
    }
}