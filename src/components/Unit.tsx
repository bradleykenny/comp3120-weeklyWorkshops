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
			<div>
				<p>
					{code}: {title}
				</p>
				<button onClick={this.toUpper}>Upper</button>
				<button onClick={this.toLower}>Lower</button>
			</div>
		);
	}

	toUpper = () => {
		this.setState({ title: this.state.title.toUpperCase() });
	};

	toLower = () => {
		this.setState({ title: this.state.title.toLowerCase() });
	};
}

export default Unit;
