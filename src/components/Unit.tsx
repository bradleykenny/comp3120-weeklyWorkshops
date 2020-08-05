import React, { Component } from "react";

type UnitProps = {
	code: string;
	title: string;
};
type UnitState = {
	title: string;
};

class Unit extends Component<UnitProps, UnitState> {
	constructor(props: UnitProps) {
		super(props);
		this.state = { title: props.title };
	}

	render() {
		const { code } = this.props;
		let title = this.state ? this.state.title : "";

		return (
			<div className="unit">
				<p>
					{code}: {title}
				</p>
				<button onClick={this.toUpper}>Upper</button>
				<button onClick={this.toLower}>Lower</button>
				<button onClick={this.defaultCase}>Default</button>
			</div>
		);
	}

	toUpper = () => {
		this.setState({ title: this.state.title.toUpperCase() });
	};

	toLower = () => {
		this.setState({ title: this.state.title.toLowerCase() });
	};

	defaultCase = () => {
		this.setState({ title: this.props.title });
	};
}

export default Unit;
