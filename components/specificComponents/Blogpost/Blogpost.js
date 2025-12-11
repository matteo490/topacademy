import React, { Component } from "react";
import css from "./Blogpost.module.scss";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";
import {RichTextToHTML} from "../../../functions/storyBlokRichTextRenderer";

export default class Blogpost extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const author = this.props.blok.author && Array.isArray(this.props.blok.author) 
			? this.props.blok.author[0] 
			: this.props.blok.author;
		
		return (
			<>
				<div {...storyblokEditable(this.props.blok)} className={css["blogpostitem"]}>
					<div className={css["blogpostheader"]}>
						<span className={css["blogposttitle"]}>{this.props.blok.title}</span>
						{author && author.content && (
							<Link href={`/people/${author.slug}`}>
								<span className={css["blogpostauthortext"]}>By: {author.content.firstname} {author.content.lastname}</span>
							</Link>
						)}
						<span className={css["blogpostdate"]}>{this.props.blok.date}</span>
					</div>
					<div className={css["blogpostitemcontent"]}>
						{RichTextToHTML({ document: this.props.blok.description })}
					</div>
				</div>
			</>
		);
	}
}