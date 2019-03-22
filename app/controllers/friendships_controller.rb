class FriendshipsController < ApplicationController
  def create

    @friendship = current_user.friendships.create(friend_id: params[:friend_id])
    if @friendship.save
      flash[:notice] = "Friend requested."
      redirect_to :root  
    else
      flash[:error] = "Unable to request friendship."
      redirect_to :root
    end
  end

  def update
  @friendship = Friendship.find_by(id: params[:id])
  @friendship.update(status: "accepted", accepted: 'true')
    if @friendship.save
      redirect_to root_url, notice: "Successfully confirmed friend!"
    else
      redirect_to root_url, notice: "Sorry! Could not confirm friend!"
    end
  end

  def destroy
    @friendship = Friendship.find_by(id: params[:id])
    if @friendship.destroy
      redirect_to root_url, notice: "Removed friendship."
    else
      redirect_to root_url, notice: "Sorry Couldn't Remove Friendship"
    end
  end
end
