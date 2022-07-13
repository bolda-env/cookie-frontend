import React from "react";

function Post({ avatar_profile }) {
  return (
    <main className="post">
      <section className="post-text-area">
        <textarea name="post" id="post" cols="50" rows="4"></textarea>
        <button className="btn">post</button>
      </section>

      <section className="post-dialog">
        <div className="post-wrapper">
          <div className="avatar">
            <img src={avatar_profile} width="100" alt="User" />
          </div>
          <div className="post-child">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            in doloribus quia voluptas obcaecati numquam dignissimos omnis
            quaerat veritatis exercitationem mollitia, atque, ipsum quibusdam
            soluta alias ad aut! Nemo, incidunt? Tempora est porro animi, fugiat
            nam obcaecati fuga deserunt perferendis sed, recusandae sapiente
            magni qui atque corrupti? Dolores facilis, omnis blanditiis fugit
            optio molestiae distinctio, perspiciatis delectus pariatur sequi
            nostrum? Earum nobis, quae expedita nihil nulla consequatur tempore.
            Sapiente suscipit dicta velit rem. Tenetur adipisci ipsa ab deserunt
            magnam, vitae eos amet quibusdam ipsam fuga, accusamus sapiente vero
            asperiores numquam. Magni quasi maxime labore perferendis corporis
            nisi. Quia assumenda nesciunt culpa porro fugiat repellat quis quam
            voluptatibus accusantium cumque eveniet, sequi fuga veniam magni
            praesentium modi quae ipsa id tenetur. Accusantium magnam numquam
            sit corporis libero illo facere reprehenderit, eum odio provident,
            fuga nobis maiores dolorum ratione tempore! Ipsum maiores at
            voluptatem unde perferendis iure quaerat odit aspernatur odio nulla.
          </div>
        </div>
      </section>
    </main>
  );
}

export default Post;
