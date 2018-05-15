import * as React from 'react'

const Style = require('./Switch.css')

export interface SwitchProps extends React.Props<any> {
    on: boolean;
    onClick: (e: any) => any;
    className?: string;
}

const Switch = (props: SwitchProps) => {
    const classes = ['switch', props.className, (props.on ? 'on ' : '')].join(' ');
    return (
      <div className={classes} onClick={(e) => props.onClick(e)}>
        <div className="switch-toggle" children={props.children}></div>
      </div>
    );
}
  
  export default Switch;