export default function QuoteCard(props){

    return (
    <div className="card">
      <div className="card-header">
        Quote
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{props.quote}</p>
          <footer className="blockquote-footer">{props.writer}</footer>
        </blockquote>
      </div>
    </div>
    )
  
  
  }