import React, { Component } from "react";
import css from "./Blogpost.module.scss";
import { storyblokEditable } from "@storyblok/react";
import {RichTextToHTML} from "../../../functions/storyBlokRichTextRenderer";

export default class Blogpost extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div {...storyblokEditable(this.props.blok)} className={css["blopostitem"]}>
					<div className={css["blogpostheader"]}>
						<span className={css["blogpostdate"]}>{this.props.blok.startdate} - {this.props.blok.enddate}</span>
						<span className={css["blogposttitle"]}>{this.props.blok.title}</span>
					</div>
					<div className={css["blogpostitemcontent"]}>
						{RichTextToHTML({ document: this.props.blok.description })}
					</div>
				</div>
			</>
		);
	}
}