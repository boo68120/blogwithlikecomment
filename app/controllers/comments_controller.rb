class CommentsController < ApplicationController
 before_action :authenticate_user!, except: [:index, :show]

	def create
			#@post = Post.find(comment_params[:post_id])
			@comment = Comment.create(comment_params)
			@comment.save
		respond_to do |format|
         format.json{ render json: @comment}
		end
	end

	def destroy
		@post = Post.find(params[:post_id])
		@comment = @post.comments.find(params[:id])
		if @comment.destroy
			respond_to do |format|
        		 format.json{ render json: @comment}
			end
		else
			format.json{ render json: @post}
		end
	end


private
	def comment_params
		params.require(:comment).permit(:name, :body, :user_id, :post_id)
	end
end
